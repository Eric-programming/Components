import { IPage } from "./components/PageList";

export const ALL_PAGES = "All";
export const pages: IPage[] = [
  {
    title: "Azure Arc",
    route: "azure-arc",
    category: "Hybrid Multicloud",
    description: "Unify on-premises, hybrid and cross-cloud infrastructure",
  },
  {
    title: "Azure Container Apps",
    route: "azure-container-apps",
    category: "Container",
    description: "Build and deploy modern apps using serverless containers",
  },
  {
    title: "Azure Spring Cloud",
    route: "azure-spring-cloud",
    category: "Compute",
    description: "Bring modern microservice patterns to Spring Boot apps",
  },
  {
    title: "Azure DevOps",
    route: "azure-devops",
    category: "Compute",
    description:
      "Share code, track work, and ship software with modern dev services",
  },
  {
    title: "Azure Chaos Studio",
    route: "azure-chaos-studio",
    category: "Compute",
    description: "Improve app resilience by introducing faults and outages",
  },
  {
    title: "Azure Kubernetes Service (AKS)",
    route: "azure-aks",
    category: "Container",
    description: "Build and scale apps with managed Kubernetes",
  },
  {
    title: "Azure Virtual Machines",
    route: "azure-vm",
    category: "Compute",
    description: "Deploy VM's in seconds",
  },
];
