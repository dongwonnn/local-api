import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import MsgInput from "./MsgInput";
import MsgItem from "./MsgItem";
import fetcher from "../fetcher";
// import useInfinieScroll from "../hooks/useInfinityScroll";

const MsgList = ({ smsgs, users }) => {
  const {
    query: { userId = "" },
  } = useRouter();
  const [msgs, setMsgs] = useState(smsgs);
  const [editingId, setEditingId] = useState(null);
  const fetchMoreElement = useRef();
  const [hasNext, setHasNext] = useState(true);
  // const intersecting = useInfinieScroll(fetchMoreElement);

  const onCreate = async (text) => {
    const newMsg = await fetcher("post", "messages", { text, userId });
    if (!newMsg) throw Error("something wrong");

    setMsgs((msgs) => [newMsg, ...msgs]);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await fetcher("put", `messages/${id}`, { text, userId });

    if (!newMsg) throw Error("something wrong");
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === id);
      if (targetIndex < 0) return;

      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg);

      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = async (id) => {
    const receivedId = await fetcher("delete", `messages/${id}`, { userId });

    if (!receivedId) throw Error("something wrong");

    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === id);
      if (targetIndex < 0) return;

      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);

      return newMsgs;
    });
  };

  const doneEdit = () => {
    setEditingId(null);
  };

  // useEffect는 async 사용을 피하고 있음. 때문에 함수를 따로 빼서 사용
  const getMessages = async () => {
    const newMsgs = await fetcher("get", "/messages", {
      params: { cursor: msgs[msgs.length - 1?.id || ""] },
    });

    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    }

    setMsgs(newMsgs);
  };

  useEffect(() => {
    if (intersecting && hasNext) getMessages;
  }, []);

  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className="messages">
        {msgs.map((x) => (
          <MsgItem
            key={x.id}
            {...x}
            onUpdate={onUpdate}
            startEdit={() => setEditingId(x.id)}
            onDelete={() => onDelete(x.id)}
            isEditing={editingId === x.id}
            myId={userId}
          />
        ))}
      </ul>
      <div ref={fetchMoreElement} />
    </>
  );
};

export default MsgList;
