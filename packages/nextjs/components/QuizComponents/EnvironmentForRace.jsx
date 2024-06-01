export default function EnvironmentForRace({ myEnvironment, setMyEnvironment }) {
  return (
    <div>
      <h3 className="text-2xl">Select which space you would enjoy the most!</h3>
      <div className="flex flex-col mt-8 text-xl space-y-8 > * + *">
        <div>
          <input
            type="radio"
            value="Elf"
            id="Elf"
            checked={myEnvironment === "Elf"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyEnvironment(selectedOption);
              console.log(selectedOption);
            }}
          />
          <label htmlFor="Elf" className={`cursor-pointer p-2 rounded-md`}>
            Forests
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Dwarf"
            id="Dwarf"
            checked={myEnvironment === "Dwarf"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyEnvironment(selectedOption);
              console.log(selectedOption);
            }}
          />
          <label htmlFor="Dwarf" className={`cursor-pointer p-2 rounded-md`}>
            Mountains
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Human"
            id="Human"
            checked={myEnvironment === "Human"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyEnvironment(selectedOption);
              console.log(selectedOption);
            }}
          />
          <label htmlFor="Human" className={`cursor-pointer p-2 rounded-md`}>
            Cities
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Halfling"
            id="Halfling"
            checked={myEnvironment === "Halfling"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyEnvironment(selectedOption);
              console.log(selectedOption);
            }}
          />
          <label htmlFor="Halfling" className={`cursor-pointer p-2 rounded-md`}>
            Farmland
          </label>
        </div>
      </div>
    </div>
  );
}
