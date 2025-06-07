import { Line } from "react-chartjs-2";
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

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Chart Data
const data = {
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

// Plugin to set canvas background color
const backgroundPlugin = {
  id: "custom_canvas_background_color",
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext("2d");
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "#1e1e1e"; // dark gray
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

// Chart Options
const options = {
  responsive: true,
  animation: {
    duration: 1200,
    easing: "easeOutBounce",
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Heart Disease Cases Over Years",
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

// React Component
const Stat = () => {
  return (
    <motion.div
      className="stat-container dark-bg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Line data={data} options={options} plugins={[backgroundPlugin]}  />
    </motion.div>
  );
};

export default Stat;
