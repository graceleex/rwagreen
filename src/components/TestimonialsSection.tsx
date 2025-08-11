"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "王晨",
    role: "新能源基金合伙人",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "项目披露与链上数据让我们能快速评估真实收益与风险，自动分红大幅降低了运维成本。"
  },
  {
    name: "刘洋",
    role: "充电桩运营商",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "设备数据通过IoT上链后，投资人与我们共享同一套真实指标，融资效率明显提升。"
  },
  {
    name: "张敏",
    role: "风电项目开发经理",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "分布式投资与透明化结算让更多资金进入清洁能源建设，现金流更可预测。"
  },
  {
    name: "陈伟",
    role: "合规顾问",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "完备的KYC/AML与审计流程，能满足不同地区的监管要求，降低合规风险。"
  },
  {
    name: "李娜",
    role: "个人投资者",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "用少量资金就能参与真实的绿色资产，应用内的数据看板清晰易懂。"
  },
  {
    name: "周鹏",
    role: "光伏EPC",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "标准化的资产拆分与代币发行流程，帮助我们更快完成项目融资与交付。"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">受绿色投资者信赖</h2>
          <p className="text-muted-foreground text-lg">
            加入EcoWatt RWA，共同加速绿色能源转型
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;