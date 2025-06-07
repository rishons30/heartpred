
import { Line } from "react-chartjs-2"; // ✅ Import Line chart
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



const data={

  labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
datasets: [
    {
      label: "Heart Disease Cases (millions)",
      data: [5, 5.5, 6, 6.8, 7.5, 8.2, 9, 9.8],
      borderColor: "#ff4d4d",
      backgroundColor: "#ffcccc",
      tension: 0.4,
    },
  ],
};


const options = {
  responsive: true,
  animation: {
    duration: 1200,
    easing: "easeOutBounce",
  },
  plugins: {
    legend: {
      display: false,  // hide legend
    },
    title: {
      display: true,
      text: "Heart Disease Cases Over Years",  // your chart title
      color: "#ffffff",
      font: {
        size: 18,
        weight: "bold",
      },
      padding: {
        top: 10,
        bottom: 30,
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#ffffff" },
      grid: { color: "#444" },
    },
    y: {
      ticks: { color: "#ffffff" },
      grid: { color: "#444" },
    },
  },
};





const Stat = () => {
  return (
    <motion.div
      className="stat-container"
      initial={{ opacity: 0, y: 50 }} // animation: start invisible and lower
      animate={{ opacity: 1, y: 0 }}  // animation: fade in and slide up
      transition={{ duration: 1 }}    // takes 1 second
      style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}
    >
      <Line data={data} options={options} />
    </motion.div>
  );
};



export default Stat