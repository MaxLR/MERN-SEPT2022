import { useState } from "react";

import flashcardsData from '../../data/flashcards'
import { Flashcard } from "./Flashcard";

export const Flashcards = (props) => {
    const [flashcards, setFlashcards] = useState(flashcardsData)
    const [category, setCategory] = useState("")
    const [front, setFront] = useState("")
    const [back, setBack] = useState("")

    const handleNewCardSubmit = (e) => {
        e.preventDefault()
        const newCard = {
        // setting key value pairs to match up w/ flashcard object
        // long form key: value syntax
        category: category,
        // shorthand syntax when key & var name match
        front,
        back
        }

        setFlashcards([newCard, ...flashcards])
        setCategory("")
        setFront("")
        setBack("")
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
                        passed in. So we have to create the callback below so we can control what
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
                    <label>Front: </label>
                    <input
                        onChange={(e) => {
                            setFront(e.target.value);
                        }}
                        type="text"
                        value={front}
                    />
                </div>

                <div>
                    <label>Back: </label>
                    <input
                        onChange={(e) => {
                            setBack(e.target.value);
                        }}
                        type="text"
                        value={back}
                    />
                </div>
                <button>Add</button>
            </form>
            <hr />
            <main className="flex-row flex-wrap">
                {flashcards.map((card, i) => {
                    return (
                        <Flashcard
                            card={card}
                            idx={i}
                            handleDelete={handleDelete}
                            handleFlipCardClick={handleFlipCardClick}
                        />
                    );
                })}
            </main>
        </div>
    )
}