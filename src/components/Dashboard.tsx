import { StatisticCard } from "./StatisticCard";

const Dashboard = (): JSX.Element => {
  return (
    <>
      <h1>Hola, nombre</h1>
      <p>Bienvenido</p>
      <div className="flex flex-col gap-10">
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
      </div>
    </>
  );
}

export { Dashboard };