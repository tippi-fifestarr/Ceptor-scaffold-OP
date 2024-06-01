export default function JobForClass({ myJob, setMyJob }) {
  return (
    <div>
      <h3 className="text-2xl">Select the job that sounds most fun!</h3>
      <div className="flex flex-col mt-8 text-xl space-y-8 > * + *">
        <div>
          <input
            type="radio"
            value="Fighter"
            id="Fighter"
            checked={myJob === "Fighter"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyJob(selectedOption);
              console.log(selectedOption);
            }}
          />
          <label htmlFor="Fighter" className={`cursor-pointer p-2 rounded-md`}>
            Martial Artist
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Cleric"
            id="Cleric"
            checked={myJob === "Cleric"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyJob(selectedOption);
              console.log(selectedOption);
            }}
          />
          <label htmlFor="Cleric" className={`cursor-pointer p-2 rounded-md`}>
            Paramedic
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Mage"
            id="Mage"
            checked={myJob === "Mage"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyJob(selectedOption);
              console.log(selectedOption);
            }}
          />
          <label htmlFor="Mage" className={`cursor-pointer p-2 rounded-md`}>
            Research Scientist
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Thief"
            id="Thief"
            checked={myJob === "Thief"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyJob(selectedOption);
              console.log(selectedOption);
            }}
          />
          <label htmlFor="Thief" className={`cursor-pointer p-2 rounded-md`}>
            Private Investigator
          </label>
        </div>
      </div>
    </div>
  );
}
