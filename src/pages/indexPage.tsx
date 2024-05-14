import { useAppStore } from "../stores/useAppStore";

const indexPage = () => {
  const { categories } = useAppStore();
  console.log(categories);
  return <div>indexPage</div>;
};

export default indexPage;
