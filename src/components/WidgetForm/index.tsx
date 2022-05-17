import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes={
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA:{
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

// O que o Object.entries(feedbackTypes)=> vai retornar
// [
//     ['BUG', {...}],
//     ['IDEA', {...}],
//     ['THOUGHT', {...}]
// ]

// ira retorna um Array, com varios array dentro, sendo ['key', 'valoresDentro']


// {Object.entries(feedbackTypes).map(([key, value]) => {
//     return();


//     VOCE PODE RETORNA NO MAP , DOIS VALORES NO PARAMETROS, VOCE PODE
//     DESESTRUTURAR

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null >(null)
    const [feedbackSent, setFeedbackSent] = useState(false);
 
    function handleRestartFeedback(){
        setFeedbackSent(false)
        setFeedbackType(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
              { feedbackSent ? (
                  <FeedbackSuccessStep  onFeedbackRestartRequest={handleRestartFeedback}/>
              ) : (
                  <>
                {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            ) : (
                <FeedbackContentStep 
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback}
                    onFeedbackSent={() => setFeedbackSent(true)}
                    />
            )}
                  </>
              )}  


            <footer className="text-xs text-neutral-400  ">
                Feito com sz pela <a className="underline underline-offset-2" href="#">Rocketseat</a>
            </footer>
        </div>
    )
}