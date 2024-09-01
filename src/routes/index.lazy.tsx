"use client";

import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { CalendarDays, MapPin, Search, Users } from "lucide-react";
import { createLazyFileRoute } from "@tanstack/react-router";


export const Index = () => (
    <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                            Discover, Attend, and Host Amazing Events
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                            Find your next experience or share your passion with others. Eventify makes it easy to
                            connect and create memorable moments.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <form className="flex space-x-2">
                            <Input className="max-w-lg flex-1" placeholder="Search events..." type="text" />
                            <Button type="submit" variant="secondary">
                                <Search className="h-4 w-4 mr-2" />
                                Search
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured
                    Events</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <Card key={i}>
                            <CardHeader>
                                <CardTitle>Tech Conference 2023</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img
                                    alt="Event image"
                                    className="w-full h-48 object-cover mb-4 rounded-md"
                                    height="200"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "350/200",
                                        objectFit: "cover",
                                    }}
                                    width="350"
                                />
                                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                                    <CalendarDays className="h-4 w-4" />
                                    <span>June 15, 2023</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                                    <MapPin className="h-4 w-4" />
                                    <span>San Francisco, CA</span>
                                </div>
                                <p className="text-sm text-gray-600">Join us for the biggest tech conference of the
                                    year, featuring industry leaders and innovative workshops.</p>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Attend Event</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Explore Event
                    Categories</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {["Music", "Tech", "Sports", "Arts"].map((category) => (
                        <Card key={category} className="text-center">
                            <CardHeader>
                                <CardTitle>{category}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">Discover
                                    amazing {category.toLowerCase()} events near you</p>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant="outline">
                                    Explore {category}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Host Your Own Event</h2>
                        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                            Share your passion, showcase your talent, or bring people together. It's easy to create
                            and manage your event with Eventify.
                        </p>
                    </div>
                    <Button size="lg">
                        <Users className="mr-2 h-4 w-4" />
                        Start Hosting
                    </Button>
                </div>
            </div>
        </section>
    </main>
);

export const Route = createLazyFileRoute("/")({
    component: Index,
});
