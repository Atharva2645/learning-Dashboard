"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import {
  Book,
  Brain,
  Clock,
  Users,
  BarChart2,
  AlertTriangle,
  CheckCircle2,
  FileText,
  MessageCircle,
  Calendar,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data (same as before, with additions)
const skillProgressData = [
  { name: "c laguage", score: 80 },
  { name: "cpp ", score: 65 },
  { name: "Java", score: 90 },
  { name: "DSA", score: 70 },
  { name: "Python", score: 85 },
];

const weeklyProgressData = [
  { name: "Week 1", progress: 20 },
  { name: "Week 2", progress: 45 },
  { name: "Week 3", progress: 60 },
  { name: "Week 4", progress: 80 },
];

const studentsData = [
  {
    id: 1,
    name: "Yash Sankpal",
    avatar: "/placeholder.svg",
    overallProgress: 90,
  },
  {
    id: 2,
    name: "Atharv Bhasme ",
    avatar: "/placeholder.svg",
    overallProgress: 85,
  },
  { id: 3, name: "karan ", avatar: "/placeholder.svg", overallProgress: 60 },
  { id: 4, name: "Raj", avatar: "/placeholder.svg", overallProgress: 70 },
];

const assignmentsData = [
  {
    id: 1,
    title: "DSA Exam",
    dueDate: "2024-06-15",
    subject: "DSA",
    status: "Active",
  },
  {
    id: 2,
    title: "Python Quiz",
    dueDate: "2024-06-20",
    subject: "Python",
    status: "Draft",
  },
  {
    id: 3,
    title: "cpp Test",
    dueDate: "2024-06-18",
    subject: "cpp",
    status: "completed",
  },
];

export function EnhancedTeacherDashboardComponent() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    dueDate: "",
    subject: "",
    description: "",
  });
  const [newAnnouncement, setNewAnnouncement] = useState("");

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setActiveTab("student-details");
  };

  const handleCreateAssignment = () => {
    // In a real app, this would send the new assignment to a backend API
    console.log("Creating new Task:", newAssignment);
    setNewAssignment({ title: "", dueDate: "", subject: "", description: "" });
  };

  const handleCreateAnnouncement = () => {
    // In a real app, this would send the new announcement to a backend API
    console.log("Creating new announcement:", newAnnouncement);
    setNewAnnouncement("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">
      TutorTrack: Personalized Learning Path Dashboard
      </h1>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="skills">Skills Assessment</TabsTrigger>
          <TabsTrigger value="assignments">Task</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="notification">notification</TabsTrigger>
          {selectedStudent && (
            <TabsTrigger value="student-details">Student Details</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Students
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Progress
                </CardTitle>
                <BarChart2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">72%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Skills Covered
                </CardTitle>
                <Brain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">35</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Avg. Learning Time
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.5 hrs/day</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Class Skill Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart width={500} height={300} data={skillProgressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#8884d8" />
                </BarChart>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Weekly Learning Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart width={500} height={300} data={weeklyProgressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="progress" stroke="#8884d8" />
                </LineChart>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle>Student List</CardTitle>
              <CardDescription>
                Click on a student to view detailed information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {studentsData.map((student) => (
                  <Card
                    key={student.id}
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => handleStudentSelect(student)}
                  >
                    <CardContent className="flex items-center space-x-4 p-4">
                      <Avatar>
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold">
                          {student.name}
                        </h3>
                        <Progress
                          value={student.overallProgress}
                          className="w-[100px]"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <RadarChart width={500} height={400} data={skillProgressData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Class Average"
                    dataKey="score"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments">
          <Card>
            <CardHeader>
              <CardTitle>Task</CardTitle>
              <CardDescription>Manage and create Task</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Current Task</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Create New Task</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Create New Task</DialogTitle>
                        <DialogDescription>
                          Fill in the details for the new Task.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="title" className="text-right">
                            Title
                          </Label>
                          <Input
                            id="title"
                            value={newAssignment.title}
                            onChange={(e) =>
                              setNewAssignment({
                                ...newAssignment,
                                title: e.target.value,
                              })
                            }
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="dueDate" className="text-right">
                            Due Date
                          </Label>
                          <Input
                            id="dueDate"
                            type="date"
                            value={newAssignment.dueDate}
                            onChange={(e) =>
                              setNewAssignment({
                                ...newAssignment,
                                dueDate: e.target.value,
                              })
                            }
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="subject" className="text-right">
                            Subject
                          </Label>
                          <Select
                            onValueChange={(value) =>
                              setNewAssignment({
                                ...newAssignment,
                                subject: value,
                              })
                            }
                          >
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="c language">
                                c language
                              </SelectItem>
                              <SelectItem value="cpp">cpp</SelectItem>
                              <SelectItem value="java">java</SelectItem>
                              <SelectItem value="DSA">DSA</SelectItem>
                              <SelectItem value="Python">Python</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="description" className="text-right">
                            Description
                          </Label>
                          <Textarea
                            id="description"
                            value={newAssignment.description}
                            onChange={(e) =>
                              setNewAssignment({
                                ...newAssignment,
                                description: e.target.value,
                              })
                            }
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleCreateAssignment}>
                          Create Assignment
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Title</th>
                      <th className="text-left">Due Date</th>
                      <th className="text-left">Subject</th>
                      <th className="text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignmentsData.map((assignment) => (
                      <tr key={assignment.id}>
                        <td>{assignment.title}</td>
                        <td>{assignment.dueDate}</td>
                        <td>{assignment.subject}</td>
                        <td>{assignment.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication">
          <Card>
            <CardHeader>
              <CardTitle>Communication Center</CardTitle>
              <CardDescription>
                Send announcements and messages to students and parents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Create Announcement
                  </h3>
                  <Textarea
                    placeholder="Type your announcement here..."
                    value={newAnnouncement}
                    onChange={(e) => setNewAnnouncement(e.target.value)}
                  />
                  <Button className="mt-2" onClick={handleCreateAnnouncement}>
                    Post Announcement
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Recent Messages
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-blue-500" />
                      <span>
                        Message from Parent: Regarding field trip next week
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-green-500" />
                      <span>
                        Message to Class: Reminder about upcoming test
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>
                Detailed insights into student performance and learning patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Performance Trends
                  </h3>
                  <LineChart width={600} height={300} data={weeklyProgressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="progress" stroke="#8884d8" />
                  </LineChart>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Skill Distribution
                  </h3>
                  <BarChart width={600} height={300} data={skillProgressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#82ca9d" />
                  </BarChart>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Learning Time Analysis
                  </h3>
                  <p>Average daily learning time: 3.5 hours</p>
                  <p>Most active learning period: 2 PM - 4 PM</p>
                  <p>Subjects requiring more time: Pyhon, DSA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notification">
          <Card>
            <CardHeader>
              <CardTitle>Notification Center</CardTitle>
              <CardDescription>
                Send Notifications and messages to students.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Send Notification
                  </h3>
                  <Textarea
                    placeholder="Type your Notification here..."
                    value={newAnnouncement}
                    onChange={(e) => setNewAnnouncement(e.target.value)}
                  />
                  <Button className="mt-2" onClick={handleCreateAnnouncement}>
                    Post Notification
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Recent Messages
                  </h3>
                  <ul className="space-y-2">
                   
                    <li className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-green-500" />
                      <span>
                        Message to Class: Reminder about upcoming Exam.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>        

        {selectedStudent && (
          <TabsContent value="student-details">
            <Card>
              <CardHeader>
                <CardTitle>{selectedStudent.name}</CardTitle>
                <CardDescription>
                  Detailed student information and progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Overall Progress
                    </h3>
                    <Progress
                      value={selectedStudent.overallProgress}
                      className="w-full"
                    />
                    <p className="mt-2">
                      Current progress: {selectedStudent.overallProgress}%
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Skill Breakdown
                    </h3>
                    <ul className="space-y-2">
                      {skillProgressData.map((skill) => (
                        <li
                          key={skill.name}
                          className="flex justify-between items-center"
                        >
                          <span>{skill.name}</span>
                          <Progress value={skill.score} className="w-[100px]" />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Recent Activities
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <span>Completed c language MCQ - Score: 85%</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Book className="h-5 w-5 text-green-500" />
                        <span>Started new chapter in cpp</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-yellow-500" />
                        <span>Upcoming Python presentation on Friday</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Recommendations
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        <span>Needs more practice in DSA</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>
                          Excelling in Literature - consider advanced materials
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Generate Detailed Report</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
