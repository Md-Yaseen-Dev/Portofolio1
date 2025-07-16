import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import EnhancedScrollAnimation from "./enhanced-scroll-animation";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        toast({
          title: "Message Sent!",
          description: data.message || "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 parallax-bg opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <EnhancedScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              CONTACT
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-400 mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Let's work together
            </motion.p>
            <motion.p 
              className="text-slate-300 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              If you have any questions or concerns, please don't hesitate to contact me. 
              I am open to any work opportunities that align with my skills and interests.
            </motion.p>
          </div>
        </EnhancedScrollAnimation>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-full">
          {/* Contact Form */}
          <EnhancedScrollAnimation direction="left" delay={0.3}>
            <motion.div
              className="backdrop-blur-sm bg-background/20 rounded-2xl p-8 border border-slate-700/50"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Label htmlFor="name" className="block text-sm font-medium mb-2 gradient-text">
                    Your Name:
                  </Label>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background/50 border border-slate-700 rounded-lg focus:border-primary focus:outline-none transition-all backdrop-blur-sm"
                      placeholder="Enter your name"
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Label htmlFor="email" className="block text-sm font-medium mb-2 gradient-text">
                    Your Email:
                  </Label>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background/50 border border-slate-700 rounded-lg focus:border-primary focus:outline-none transition-all backdrop-blur-sm"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="message" className="block text-sm font-medium mb-2 gradient-text">
                    Your Message:
                  </Label>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-background/50 border border-slate-700 rounded-lg focus:border-primary focus:outline-none transition-all backdrop-blur-sm"
                      placeholder="Enter your message"
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="interactive-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg w-full group relative overflow-hidden"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </EnhancedScrollAnimation>
          
          {/* Contact Info */}
          <EnhancedScrollAnimation direction="right" delay={0.4}>
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "mohammadyaseen.dev@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 7095959867" },
                { icon: MapPin, label: "Location", value: "Anantapur, India" }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-6 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <motion.div 
                    className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-slate-400 text-sm font-medium">{contact.label}</p>
                    <p className="text-xl font-bold gradient-text">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Decorative Elements */}
              <motion.div
                className="relative mt-12 p-8 backdrop-blur-sm bg-background/10 rounded-2xl border border-slate-700/30"
                whileHover={{ scale: 1.02, rotateX: 2 }}
              >
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold gradient-text mb-4">Ready to collaborate?</h3>
                  <p className="text-slate-300">
                    I'm always excited to work on innovative projects and bring creative ideas to life.
                  </p>
                </motion.div>
                
                {/* Floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-4 h-4 gradient-bg rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-3 h-3 gradient-bg rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.9, 0.4]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </EnhancedScrollAnimation>
        </div>
      </div>
    </section>
  );
}
