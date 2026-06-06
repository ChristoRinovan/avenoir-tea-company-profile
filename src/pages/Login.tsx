import LoginCard from "@/components/LoginCard";
import SectionHeader from "../components/SectionHeader";

function Login() {
  return (
    <div className="p-10">
      <SectionHeader
        title="Member Access"
        description="Enter The World Of Avenoir"
      />
      <div className="flex justify-center">
        
        <LoginCard />
      </div>
    </div>
  );
}

export default Login;
