import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface GPUCardProps {
  name: string;
  brand: string;
  vram: string;
  price: number;
  condition: string;
  image?: string;
}

export const GPUCard = ({ name, brand, vram, price, condition }: GPUCardProps) => {
  return (
    <Card className="overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 group">
      <div className="aspect-video bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="5" rx="2"/>
            <path d="M2 10h20"/>
          </svg>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-foreground line-clamp-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{brand}</p>
          </div>
          <Badge variant="secondary" className="shrink-0">{condition}</Badge>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{vram} VRAM</span>
          <span className="text-xl font-bold text-primary">${price.toLocaleString()}</span>
        </div>
        <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
          View Details
        </Button>
      </div>
    </Card>
  );
};
