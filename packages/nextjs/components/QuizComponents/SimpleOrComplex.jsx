export default function SimpleOrComplex({ isSimpleQuiz, setIsSimpleQuiz }) {
  return (
    <>
      <div>Welcome to our Character Creation Quiz for Dungeons & Dragons!</div>
      <div>You have the choice between a simple quiz or a more complex one.</div>
      <p>
        The simple quiz is tailored for newcomers to the game, providing a straightforward character creation process
        based on real-life preferences. It is perfect if you are just starting out and want to dive into the adventure
        quickly with a basic level 1 character!
      </p>
      <p>
        The complex quiz, on the other hand, is designed for seasoned players. It delves deeper into character immersion
        and aspirations, offering a wider range of options for a more intricate character build.
      </p>
      <div>Please make a selection below!</div>
      <div>
        <input
          type="radio"
          value="true" // Set value to "true" for the simple option
          id="simple"
          defaultChecked={isSimpleQuiz === true}
          onChange={() => setIsSimpleQuiz(true)}
        />
        <label htmlFor="simple" className={`cursor-pointer p-2 rounded-md`}>
          Simple
        </label>
      </div>
      <div>
        <input
          type="radio"
          value="false" // Set value to "false" for the complex option
          id="complex"
          checked={isSimpleQuiz === false}
          // - Will change to false when Complex quiz is transferred over
          onChange={() => setIsSimpleQuiz(true)}
        />
        <label htmlFor="complex" className={`cursor-pointer p-2 rounded-md`}>
          Complex (unavailable right now)
        </label>
      </div>
    </>
  );
}
