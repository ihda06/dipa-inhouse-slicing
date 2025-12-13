"use client";

import { motion } from "motion/react";
import {
  Zap,
  Globe,
  Cloud,
  Mail,
  Send,
  Sparkles,
  Box,
  FileText,
  Settings,
  History,
} from "lucide-react";

interface WorkflowNode {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  x: number;
  y: number;
}

const workflowNodes: WorkflowNode[] = [
  {
    id: "1",
    title: "Hand-written report",
    subtitle: "Receive email",
    icon: <Mail className="w-5 h-5" />,
    x: 0,
    y: 0,
  },
  {
    id: "2",
    title: "Analyze report",
    subtitle: "AI agent",
    icon: <Sparkles className="w-5 h-5" />,
    x: 0,
    y: 120,
  },
  {
    id: "3",
    title: "Urgent data",
    subtitle: "Trigger",
    icon: <Zap className="w-5 h-5" />,
    x: -120,
    y: 240,
  },
  {
    id: "4",
    title: "Not urgent data",
    subtitle: "Trigger",
    icon: <Zap className="w-5 h-5" />,
    x: 120,
    y: 240,
  },
  {
    id: "5",
    title: "Enrich report",
    subtitle: "Send story",
    icon: <FileText className="w-5 h-5" />,
    x: 0,
    y: 360,
  },
];

const sidebarComponents = [
  { icon: <Globe className="w-5 h-5" />, name: "Webhook" },
  { icon: <Cloud className="w-5 h-5" />, name: "HTTP Request" },
  { icon: <Mail className="w-5 h-5" />, name: "Receive Email" },
  { icon: <Send className="w-5 h-5" />, name: "Send Email" },
  { icon: <Sparkles className="w-5 h-5" />, name: "AI Agent" },
  { icon: <Box className="w-5 h-5" />, name: "Event Transform" },
  { icon: <Zap className="w-5 h-5" />, name: "Trigger" },
  { icon: <FileText className="w-5 h-5" />, name: "Send Story" },
];

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-7xl mx-auto bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden"
    >
      {/* Header Bar */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">M</span>
          </div>
          <span className="text-sm text-gray-700 font-medium">
            Your Team / Annual Report
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white rounded-md border border-gray-300 px-2 py-1">
            <button className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded">
              Design
            </button>
            <button className="px-3 py-1 text-xs font-medium text-gray-600">
              Preview
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-gray-200 rounded">
              <History className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-200 rounded">
              <Settings className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
              Save
            </button>
            <button className="px-3 py-1.5 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
              Publish
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[600px]">
        {/* Left Sidebar */}
        <div className="w-64 border-r border-gray-200 bg-gray-50 p-4 overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Component
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {sidebarComponents.map((component, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all cursor-move"
              >
                <div className="text-blue-600">{component.icon}</div>
                <span className="text-xs text-gray-700 text-center">
                  {component.name}
                </span>
              </motion.button>
            ))}
          </div>
          <div className="mt-6 space-y-2">
            <button className="w-full flex items-center justify-between p-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              <span>Tools</span>
              <span className="text-gray-400">+</span>
            </button>
            <button className="w-full flex items-center justify-between p-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              <span>Templates</span>
              <span className="text-gray-400">+</span>
            </button>
            <button className="w-full flex items-center justify-between p-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              <span>Library</span>
              <span className="text-gray-400">+</span>
            </button>
          </div>
        </div>

        {/* Central Canvas */}
        <div className="flex-1 relative bg-gray-50 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative h-full flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Connection lines - using viewBox coordinates */}
              <motion.path
                d="M 50% 80 L 50% 200"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.path
                d="M 50% 200 L 30% 320"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.path
                d="M 50% 200 L 70% 320"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.path
                d="M 30% 320 L 50% 440"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
              />
              <motion.path
                d="M 70% 320 L 50% 440"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
              />
            </svg>
            <div className="relative">
              {workflowNodes.map((node, index) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute bg-white border-2 border-blue-500 rounded-lg p-3 shadow-lg min-w-[160px]"
                  style={{
                    left: `calc(50% + ${node.x}px)`,
                    top: `${node.y}px`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-blue-600">{node.icon}</div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-gray-900">
                        {node.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {node.subtitle}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-2 py-1">
            <button className="p-1 hover:bg-gray-100 rounded">
              <span className="text-xs text-gray-600">−</span>
            </button>
            <span className="text-xs text-gray-600 px-2">80%</span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <span className="text-xs text-gray-600">+</span>
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 border-l border-gray-200 bg-white p-4 overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Properties
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-700 mb-1 block">
                Name
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  defaultValue="Report triage"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-3 py-2 text-xs text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
                  Disable
                </button>
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700 mb-1 block">
                Name
              </label>
              <input
                type="text"
                defaultValue="Report triage"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700 mb-1 block">
                Description
              </label>
              <textarea
                defaultValue="Triage reports through different sources including a Times page for manual inputs, automated webhook notifications and hand-written reports received through email."
                rows={4}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700 mb-1 block">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {["Report", "App", "Annual", "CRM", "AI"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700 mb-1 block">
                Credentials
              </label>
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-200">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Slack</div>
                  <div className="text-xs text-gray-500">1 Actions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
