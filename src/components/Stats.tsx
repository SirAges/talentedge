import { achievements } from "@/lib/data";

const Stats = () => {
  return (
    <section
      id="program-select"
      className="md:px-20 px-4 py-10 flex flex-col md:flex-row   w-full items-center space-y-5 bg-background "
    >
      <div className="flex-1 space-y-4 rounded-lg">
        <h1 className="text-3xl md:text-4xl font-semibold">
          We Ship Excellence
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam animi
          illo voluptates quas totam neque unde dolor culpa corporis dolore?
        </p>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 rounded-lg justify-between ">
        {achievements.map(({ stat, description, id }) => (
          <div
            key={id}
            className="flex min-h-44 flex-col items-center justify-center border rounded-lg px-4 cursor-pointer py-4 gap-3"
          >
            <p className="text-5xl font-bold">{stat / 1000}K</p>
            <p className="text-center">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Stats;
