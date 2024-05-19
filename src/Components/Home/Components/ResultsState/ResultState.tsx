import { DynamicGenerator } from "../../../DynamicGenerator/DynamicGenerator";
import { OptionsStateInterface } from "./types";
import ThumbsUp from "@assets/thumb_up.svg";
import ThumbsDown from "@assets/thumb_down.svg";
import Sync from "@assets/directory_sync.svg";
import Delete from "@assets/delete.svg";
import ArrowBack from "@assets/arrow_back.svg";
import ArrowForward from "@assets/arrow_forward.svg";

const ResultState = ({
  response,
  responseIndex,
  loading,
  setResponse,
  setResponseIndex,
  sendDatahandler,
  discardReponseHandler,
  customContext,
  setCustomContext,
  setText,
  text,
}:OptionsStateInterface) => {
  return (
    <div
      className={`w-full bg-[linear-gradient(to_right_bottom,white,#F4ECF7,#FAD9D7)] rounded-${loading ? "full" : "lg"}	border border-grey-50  py-2 px-4`}
    >
      <div>
        {response?.map((reply, index) =>
          responseIndex === index ? (
            <DynamicGenerator index={index} response={response} setResponse={setResponse} text={reply.text} />
          ) : null,
        )}

        <div className="flex items-center justify-between mt-4">
          <div className="flex ">
            <img className="mr-2 h-5 w-5" src={ThumbsUp} />
            <div className="border-l-2 border-primary-red-100"></div>
            <img className="ml-2 h-5 w-5" src={ThumbsDown} />
          </div>

          <div className="flex items-center justify-between">
            {response?.length > 1 ? (
              <div>
                <div className="flex items-center mr-2">
                  <img
                    onClick={() => {
                      if (responseIndex - 1 > -1) {
                        setResponseIndex(responseIndex - 1);
                      }
                    }}
                    className="h-4 w-4 cursor-pointer"
                    src={ArrowBack}
                  />
                  <span>
                    {responseIndex + 1}/{response.length}
                  </span>
                  <img
                    onClick={() => {
                      if (responseIndex + 1 < response.length) {
                        setResponseIndex(responseIndex + 1);
                      }
                    }}
                    className="h-4 w-4 cursor-pointer"
                    src={ArrowForward}
                  />
                </div>
                <div className="border-l-2 border-primary-red-100"></div>
              </div>
            ) : null}
            <button
              onClick={() => {
                sendDatahandler("please generate different story", "paginate");
                setResponseIndex(responseIndex + 1);
              }}
              className="bg-white rounded-full px-3 py-1 mr-2 flex items-center cursor-pointer"
            >
              <img className="h-4 w-4 mr-1" src={Sync} />
              <span>Try Again</span>
            </button>
            <button onClick={discardReponseHandler} className="bg-white rounded-full px-3 py-1 flex items-center cursor-pointer">
              <img className="h-4 w-4 mr-1" src={Delete} />
              <span>Discard</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full border-b-2 border-t-2 border-primary-red-100 flex items-center p1-2 mt-4">
          <div className="flex items-center justify-center bg-gradient-to-b from-purple-600 to-pink-600 h-5 w-5 rounded-full">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
          <div className="bg-gradient-to-tr from-purple-600 to-pink-600 h-5 w-1 mx-2"></div>
          <form
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              sendDatahandler(customContext, "paginate");
              setResponseIndex(responseIndex + 1);
            }}
          >
            <input
              className="py-2 bg-transparent w-full outline-none"
              placeholder="Tell ved what to do next or select an option below"
              value={customContext}
              onChange={(e) => setCustomContext(e.target.value)}
            />
          </form>
        </div>
        <div className="mb-2 mt-4 flex">
          <button
            onClick={() => {
              setText(text + response[responseIndex].text);
              setResponse([]);
            }}
            className="bg-white rounded-lg px-3 py-1 mr-2 flex items-center cursor-pointer"
          >
            <span>Insert Below</span>
          </button>
          <button
            onClick={() => {
              setText(response[responseIndex].text);
              setResponse([]);
            }}
            className="bg-white rounded-lg px-3 py-1 mr-2 flex items-center cursor-pointer"
          >
            <span>Replace Selection</span>
          </button>
          <button className="bg-white rounded-lg px-3 py-1 flex items-center cursor-pointer">
            <span>Save to notes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultState;
