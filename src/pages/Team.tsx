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
  ];

  const moreTeamMembers = [
    {
      name: "Anupam Subedi",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "AS",
    },
    {
      name: "Anjan Ghimere",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "AG",
    },
    {
      name: "Ashuyt Adhikari",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "AA",
    },
    {
      name: "Bibek Koirala",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "BK",
    },
    {
      name: "Bikash Saud",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "BS",
    },
    {
      name: "Ningsang Jabegu",
      role: "Deployment Lead",
      bio: "Spearheading the mission to deploy code at extreme altitudes",
      initials: "NJ",
    },
    {
      name: "Sakshyam Chhatkuli",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "SC",
    },
    {
      name: "Samir Khanal",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "SK",
    },
    {
      name: "Shusbin Triphati",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "ST",
    },
    {
      name: "Subinam Dangal",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "SD",
    },
    {
      name: "Suresh Subba",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "SS",
    },
    {
      name: "Sujal Neupane",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "SN",
    },
    {
      name: "Suman Ghishing",
      role: "Team Member",
      bio: "Contributing to the Tilicho Lake deployment expedition",
      initials: "SG",
    },
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
              <div key={index} className="bg-muted p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-4">
                  {member.role === "Deployment Lead" && (
                    <Avatar className="w-16 h-16 border-2 border-border">
                      <AvatarImage
                        src={`/teams/${member.name}.png`}
                        alt={member.name}
                      />
                      <AvatarFallback className="bg-background text-foreground font-serif">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <h3 className="text-lg font-serif">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif">More Team Members</h2>
            <p className="text-muted-foreground">
              Additional team members and their stories will be featured here
              soon. This expedition brought together passionate individuals from
              Amrit Campus.
            </p>
            <div className="grid grid-cols-4 gap-4 mt-6">
              {moreTeamMembers.map((member, index) => (
                <div
                  key={index}
                  className="aspect-square bg-background rounded-lg flex items-center justify-center"
                >
                  <p className="text-xs text-muted-foreground text-center">
                    {member.name}
                  </p>
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
