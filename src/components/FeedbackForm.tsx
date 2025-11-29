import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeedbackData {
  name: string;
  email: string;
  message: string;
}

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    name: "",
    email: "",
    message: "",
  });

  const [latestFeedback, setLatestFeedback] = useState<FeedbackData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is where you'll integrate Firebase API
    // For now, we'll just simulate storing the feedback
    console.log("Form submitted:", formData);
    
    // Display the submitted feedback
    setLatestFeedback(formData);
    
    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-4xl md:text-5xl text-center text-foreground mb-8">
          Feedback Form
        </h1>

        <Card className="shadow-[var(--form-shadow)] border-border">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="bg-card border-input focus:ring-offset-0 focus:ring-2 focus:ring-ring transition-[var(--transition-smooth)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="bg-card border-input focus:ring-offset-0 focus:ring-2 focus:ring-ring transition-[var(--transition-smooth)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your feedback"
                  rows={6}
                  className="bg-card border-input focus:ring-offset-0 focus:ring-2 focus:ring-ring transition-[var(--transition-smooth)] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:opacity-90 transition-[var(--transition-smooth)] font-medium"
                size="lg"
              >
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>

        {latestFeedback && (
          <Card className="shadow-[var(--form-shadow)] border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Latest Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Name</p>
                <p className="text-foreground font-medium">{latestFeedback.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-foreground font-medium">{latestFeedback.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Message</p>
                <p className="text-foreground whitespace-pre-wrap">{latestFeedback.message}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
