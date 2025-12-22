import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "Ningsang Jabegu",
      role: "Deployment Lead",
      bio: "Spearheading the mission to deploy code at extreme altitudes",
      initials: "NJ",
    },
    // More team members coming soon
  ];

  return (
    <main className="min-h-screen bg-background py-12 md:py-24">
      <div className="container max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back Home
          </Button>
        </Link>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif">Team</h1>
            <p className="text-lg text-muted-foreground">
              The people behind the Tilicho Lake deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-muted p-6 rounded-lg space-y-4"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 border-2 border-border">
                    <AvatarImage src={`/team-${index}.jpg`} alt={member.name} />
                    <AvatarFallback className="bg-background text-foreground font-serif">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-serif">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif">More Team Members</h2>
            <p className="text-muted-foreground">
              Additional team members and their stories will be featured here soon. 
              This expedition brought together passionate individuals from Amrit Campus.
            </p>
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="aspect-square bg-background rounded-lg flex items-center justify-center"
                >
                  <p className="text-xs text-muted-foreground text-center">Member {index}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Team;
