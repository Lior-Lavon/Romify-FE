import { ContentArea, ContentBottomMenu } from "../";

const Content = () => {
  return (
    <div className="w-full h-[calc(100vh-5rem)] min-h-[calc(100vh-5rem)] flex flex-col bg-white">
      <ContentArea />
      <ContentBottomMenu />
    </div>
  );
};
export default Content;
