import { useState } from "react";
import flashcardsData from '../../data/flashcards'
import { Flashcard } from "./Flashcard";
import { useEffect } from 'react';
import { getQuestions } from "../../services/triviaApiService";

export const Flashcards = (props) => {
    const { queryParams } = props
  // this runs any time the component re-renders
  const [flashcards, setFlashcards] = useState([])
  const [category, setCategory] = useState("")
  const [question, setQuestion] = useState("")
  const [correct_answer, setCorrect_answer] = useState("")
  
    useEffect(() => {
        getQuestions(queryParams)
        .then(questions => {
            console.log("api request made")
            setFlashcards(questions.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, []) // 2nd parameter (array) is our dependency array for useEffect
    // dependency array allows you to re-run useEffect whenever a variable
    // (e.g. prop/state vars) change

    const handleNewCardSubmit = (e) => {
        e.preventDefault()
        const newCard = {
        // setting key value pairs to match up w/ flashcard object
        // long form key: value syntax
        category: category,
        // shorthand syntax when key & var name match
        question,
        correct_answer
        }

        setFlashcards([newCard, ...flashcards])
        setCategory("")
        setQuestion("")
        setCorrect_answer("")
    }

    const handleFlipCardClick = (event, selectedIdx) => {
        const updatedCards = flashcards.map((card, i) => {
    
          if (i === selectedIdx) {
            return {
              // spread operator to clone/copy all of the current card data
              ...card,
              // change/add "flipped" property on the new (duplicated) object
              flipped: !card.flipped
            }
    
            //this modifies the original card object, so can cause unintended side effects
            // card.flipped = !card.flipped
          }
          return card
        })
    
        //if you don't pass in a new array, react won't re-render
        //that's why we can't just use '.push'
        setFlashcards(updatedCards)
    }

    const handleDelete = (event, idxToRemove) => {
        // this stops the event frop "propagating"/"bubbling" up to parent
        // without it, the click will only trigger the parent's event handler
        event.stopPropagation()
        const filteredFlashcards = flashcards.filter((card, idx) => {
          return idxToRemove !== idx
        })
    
        setFlashcards(filteredFlashcards)
    }

    return(
        <div>
            <header style={{ textAlign: 'center' }}>
                <h1>Programming Flash Cards</h1>
                <hr />
            </header>

            <form
                onSubmit={e => handleNewCardSubmit(e)}
            >
                <div>
                    <label>Category: </label>
                    <input
                        /*
                        We cannot use onChange={setCategory} because then the whole event will be
                        passed in. So we have to create the callcorrect_answer below so we can control what
                        is passed in to setCategory.
                        */
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                        type="text"
                        value={category}
                    />
                </div>

                <div>
                    <label>question: </label>
                    <input
                        onChange={(e) => {
                            setQuestion(e.target.value);
                        }}
                        type="text"
                        value={question}
                    />
                </div>

                <div>
                    <label>correct_answer: </label>
                    <input
                        onChange={(e) => {
                            setCorrect_answer(e.target.value);
                        }}
                        type="text"
                        value={correct_answer}
                    />
                </div>
                <button>Add</button>
            </form>
            <hr />
            <main className="flex-row flex-wrap">
                {flashcards.length === 0 ? (
                    <h3>Loading.....</h3>
                ) : (
                    flashcards.map((card, i) => {
                        return (
                            <Flashcard
                                card={card}
                                key={i}
                                idx={i}
                                handleDelete={handleDelete}
                                handleFlipCardClick={handleFlipCardClick}
                            />
                        );
                    })
                )}
            </main>
        </div>
    )
}