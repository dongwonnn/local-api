import { useCallback, useEffect, useRef, useState } from "react";

const useInfinieScroll = (targetEl) => {
  const observerRef = useRef(null);
  const [intersecting, setIntersetcing] = useState(false);

  //  이 hook은 새로고침시나 할 때나, 데이터가 새로 불러올때마다 연거푸 실행됨을 방지한다.
  //  옵저버를 useCallback으로 레퍼런스로 만든다.
  //   const observer = new IntersectionObserver((entries) =>
  //     setIntersecting(entries.some((entry) => entry.isIntersecting))
  //   );

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) =>
        setIntersecting(entries.some((entry) => entry.isIntersecting))
      );
    }

    return observerRef.current;
  }, [observerRef.current]);

  useEffect(() => {
    if (targetEl.current) getObserver.observe(targetEl.current);

    return () => {
      getObserver.disconnect();
    };
  }, [targetEl.current]);

  return intersecting;
};

export default useInfinieScroll;
