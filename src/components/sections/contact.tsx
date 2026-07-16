"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Get in touch</CardTitle>
            <CardDescription>
              Reach out directly to discuss opportunities, collaborations, or just say hello.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <a href={`mailto:${config.email}`} target="_blank" rel="noopener noreferrer" className="w-fit">
              <Button size="lg" className="px-6">
                Send Email
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">
              Email: {config.email}
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
