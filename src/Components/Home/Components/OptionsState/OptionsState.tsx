import React from 'react'
import { isSlashHandler } from '../../../../utils/helper';
import { OptionsStateInterface } from './types';

export const OptionsState = ({text,sendDatahandler,customContext,setCustomContext,response,loading}:OptionsStateInterface) => {
  return (
    <div className="w-full mt-4">
          {isSlashHandler(text) && text.length > 50 && !response.length && !loading ? (
            <div className="border-double border-4 border-primary-red-50 rounded-md ">
              <div className="w-full border-b-2 border-primary-red-50 flex items-center px-2">
                <div className="flex items-center justify-center bg-gradient-to-b from-purple-600 to-pink-600 h-5 w-5 rounded-full">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-tr from-purple-600 to-pink-600 h-5 w-1 mx-2"></div>
                <form className="w-full" onSubmit={(e)=>{
                  e.preventDefault();
                  sendDatahandler(customContext,'')
                }}
                  >
                <input
                  value={customContext}
                  onChange={(e) => setCustomContext(e.target.value)}
                  className="py-2 bg-white w-full outline-none"
                  placeholder="Ask ved anything or choose and option below "
                />
                </form>
              </div>
              <div className="p-2 bg-[linear-gradient(to_bottom,white,#ffe0e2)]">
                <p onClick={() => sendDatahandler("Improvements to for this Story",'')} className="p-2 shadow cursor-pointer my-2 bg-white rounded-md">
                  Improve Story idea
                </p>
                <p onClick={() => sendDatahandler("Suggestion to for this Story",'')} className="p-2 shadow cursor-pointer my-2 bg-white rounded-md">
                  Suggest What to write next
                </p>
                <p onClick={() => sendDatahandler("Extend to this story",'')} className="p-2 shadow cursor-pointer my-2 bg-white rounded-md">
                  Expand
                </p>
              </div>
            </div>
          ) : null}
        </div>
  )
}
