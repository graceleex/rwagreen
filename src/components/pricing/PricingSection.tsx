import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
          <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
            热门
          </span>
      )}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-400">/月</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="button-gradient w-full">
        开始投资
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          选择你的
          <span className="text-gradient font-medium">投资方案</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          选择适合你的投资权限与工具，低门槛参与绿色能源RWA项目。
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="个人投资者"
          price="$0"
          description="适合首次参与RWA的投资者"
          features={[
            "基础KYC认证",
            "最低认购额低",
            "项目基础信息与披露",
            "邮件支持"
          ]}
        />
        <PricingTier
          name="专业投资者"
          price="$29"
          description="面向进阶投资者提供更多工具与额度"
          features={[
            "二级市场流动性",
            "自动收益分配与复投",
            "高级数据看板与报表",
            "优先客服",
            "API访问"
          ]}
          isPopular
        />
        <PricingTier
          name="资产发行方"
          price="Custom"
          description="为设备商/项目方提供一站式代币发行与合规支持"
          features={[
            "资产尽调与合规审核",
            "代币发行与收入拆分",
            "资产托管与数据接入",
            "专属客户经理",
            "定制化API集成",
            "7x24优先支持"
          ]}
        />
      </div>
    </section>
  );
};