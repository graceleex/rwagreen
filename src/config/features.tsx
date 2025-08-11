import { Sun, PlugZap, ShieldCheck, BarChart3 } from "lucide-react";

export const features = [
  {
    title: "绿色资产多元化",
    description: "充电桩、光伏、风电等实物资产上链与收益凭证化，多元化降低单一风险。",
    icon: <Sun className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
  },
  {
    title: "实时收益分配",
    description: "基于智能合约按出力与营收数据自动结算与分红，链上透明可追溯。",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
  },
  {
    title: "物联网数据确权",
    description: "接入IoT网关采集发电/充电数据，链上存证、防篡改，保障收益真实性。",
    icon: <PlugZap className="w-6 h-6" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
  },
  {
    title: "合规与风控",
    description: "KYC/AML、资产托管与第三方审计全面覆盖，降低合规与操作风险。",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png"
  }
];