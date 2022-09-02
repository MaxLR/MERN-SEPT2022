export const Flashcard = (props) => {
    const { card, handleDelete, handleFlipCardClick, idx } = props
    const { category, question, correct_answer, flipped } = card

    return(
        <section
              key={idx}
              className="card"
              onClick={(event) => {
                handleFlipCardClick(event, idx);
              }}
            >
              <h3>{category}</h3>

              {/* 
              Since we are already in a JSX return, we use a ternary since a ternary
              can specify a return value.

              condition ? 'return this if true' : 'return this if false'
              */}
              {flipped ? (
                <p >{correct_answer}</p>
              ) : (
                <p>{question}</p>
              )}
              <button
                onClick={(e) => {
                  handleDelete(e, idx)
                }}
              >
                Delete
              </button>
        </section>
    )
}