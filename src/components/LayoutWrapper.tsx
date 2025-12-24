import { ReactNode } from "react";
import { StatusBar } from "@/components/StatusBar";
import "./LayoutWrapper.css";

interface LayoutWrapperProps {
    children: ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
    return (
        <div className="layout-wrapper">
            {/* Decorative Top Bar */}
            <div className="layout-top-bar">
                <div className="layout-top-bar-accent" />
            </div>

            <main className="layout-main">
                {/* Left Margin Decoration */}
                <div className="layout-margin-decoration-left" />
                <div className="layout-margin-decoration-right" />

                <div className="layout-content-inner">
                    {children}
                </div>
            </main>

            <StatusBar />
        </div>
    );
};
