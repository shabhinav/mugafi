import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ResponseInterface } from "../../utils/types";
import {OptionsState} from "./Components/OptionsState/OptionsState";
import ResultState from "./Components/ResultsState/ResultState";

export function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ResponseInterface[]>([]);
  const [responseIndex, setResponseIndex] = useState(0);
  const [customContext, setCustomContext] = useState<string>("");
  const textareaRef= useRef<HTMLTextAreaElement | null>(null);
  const abortControllerRef = useRef<AbortController>();

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight + 5}px`;
    }
  }, [text]);

  const sendDatahandler = async (param:string,type:string) => {
    setLoading(true);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

    try {
      const { data } = await axios.post(
        import.meta.env.VITE_BASE_URL,
        {
          prompts: [
            {
              content: {
                type: "answer",
                reply: text.replace(/\\/g, ""),
                context: param ,
              },
              role: "user",
            },
          ],
        },
        {
          headers: {
            Authorization: `hiouegiyeriugerhiowehioekber`,
            "Content-Type": "application/json",
          },
          signal: signal,
        },
      );
      if(type){
        const resp=JSON.parse(data.response).payload?.length?JSON.parse(data.response).payload:[]
        setResponse([...response, ...resp]);
      }else{
        setResponse(JSON.parse(data.response).payload?.length?JSON.parse(data.response).payload:[]);
      }
      setCustomContext('')
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const cancelRequestHandler = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setLoading(false);
    }
  };

  const discardReponseHandler=()=>{
    const reponseClone=JSON.parse(JSON.stringify(response))
    reponseClone.splice(responseIndex,1)
    setResponse(reponseClone)
    setResponseIndex(responseIndex-1)
  }

  return (
    <div className="flex justify-center">
      <div className=" w-6/12 flex flex-col items-center">
        <textarea
          ref={textareaRef}
          className="mt-10 w-full border border-grey-50 p-4 rounded-md outline-none"
          onChange={(e) => {
            if (e.target.value.length < 501) {
              setText(e.target.value);
            }
          }}
          placeholder="Please enter text"
          value={text}
        />
        <div className="w-full flex justify-between">
          <p className="m-0 text-grey-100 text-base	">Word limit: {text.length}/500 words</p>
          <p className="text-grey-100 text-base">At least 50 words to continue</p>
        </div>
        <OptionsState text={text} sendDatahandler={sendDatahandler} customContext={customContext} setCustomContext={setCustomContext} response={response} loading={loading}/>
        <div className={`w-full`}>
          {loading ? (
            <div
              className={`flex items-center justify-between w-full bg-[linear-gradient(to_right_bottom,white,#F4ECF7,#FAD9D7)] rounded-${loading ? "full" : "lg"}	border border-grey-50 py-2 px-4`}
            >
              <div className="flex items-center  w-full">
                <div className="flex items-center justify-center bg-gradient-to-tr from-purple-600 to-pink-600 h-5 w-5 rounded-full">
                  <div className=" h-2 w-2 bg-white rounded-full left-2/4	top-2/4"></div>
                </div>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 ml-3">
                  Ved is Writting
                </p>
              </div>
              <div onClick={cancelRequestHandler} className="bg-black rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 22 22" className="icon-lg">
                  <rect width="8" height="8" x="7" y="7" fill="#fff" rx="1.25"></rect>
                </svg>
              </div>
            </div>
          ) : response.length ? (
            <ResultState
                response={response}
                responseIndex={responseIndex}
                loading={loading}
                setResponse={setResponse}
                setResponseIndex={setResponseIndex}
                sendDatahandler={sendDatahandler}
                discardReponseHandler={discardReponseHandler}
                customContext={customContext}
                setCustomContext={setCustomContext}
                setText={setText}
                text={text}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
