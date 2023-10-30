/**
 * 테스트코드에서 portal root를 만들기 위한 함수
 * @param id root id
 */
export const appendRootChild = (id: string) => {
  const newRoot = document.createElement("div");
  newRoot.setAttribute("id", id);
  document.body.appendChild(newRoot);
};
