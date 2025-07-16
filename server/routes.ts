import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "Missing required fields: name, email, and message are required" 
        });
      }

      // Send email using Nodemailer
      try {
        await import('./mailer').then(({ sendContactEmail }) =>
          sendContactEmail({ name, email, message })
        );
      } catch (mailErr) {
        console.error('Failed to send email:', mailErr);
        return res.status(500).json({ message: 'Failed to send email notification.' });
      }

      console.log("Contact form submission:", { name, email, message });

      res.json({ 
        message: "Message sent successfully! Thank you for reaching out." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
