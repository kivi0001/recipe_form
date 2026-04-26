import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex justify-center mt-20">
        <form className="flex gap-4 flex-col">
          <div className="flex flex-col">
            <label htmlFor="recipe">
              Name your recipe
            </label>
            <input
              className="border-[#000000] border"
              name="recipe"
              type="text"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="ingredients">
              Add table of ingredients
            </label>
            <input
              className="border-[#000000] border"
              name="ingredients"
              type="text"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="instruction">
              Make an instruction
            </label>
            <textarea
              className="border-[#000000] border"
              name="instruction"
              type="text"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="prep_minutes">
              Add prep time in minutes
            </label>
            <input
              className="border-[#000000] border"
              name="prep_minutes"
              type="number"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="cook_minutes">
              Add cooking time in minutes
            </label>
            <input
              className="border-[#000000] border"
              name="cook_minutes"
              type="number"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="servings">
              Add number of servings
            </label>
            <input
              className="border-[#000000] border"
              name="servings"
              type="number"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="difficulty">
              Add difficulty
            </label>
            <select
              className="border-[#000000] border py-1 px-2"
              name="difficulty"
            >
              <option value="easy">Easy</option>
              <option value="medium">
                Medium
              </option>
              <option value="hard">Hard</option>
              <option value="expert">
                Expert
              </option>
            </select>
          </div>
          <button
            className="py-2 px-4 rounded-2xl bg-amber-700 cursor-pointer hover:bg-amber-800 text-white"
            type="button"
            onClick={"alert('Recipe submitted!')"}
          >
            Submit recipe
          </button>
        </form>
      </main>
    </div>
  );
}
