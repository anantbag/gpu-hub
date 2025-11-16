import { GPUCard } from "@/components/GPUCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-gpu.jpg";

const SAMPLE_GPUS = [
  { id: 1, name: "NVIDIA RTX 4090", brand: "NVIDIA", vram: "24GB", price: 1599, condition: "New" },
  { id: 2, name: "AMD RX 7900 XTX", brand: "AMD", vram: "24GB", price: 999, condition: "New" },
  { id: 3, name: "NVIDIA RTX 4080", brand: "NVIDIA", vram: "16GB", price: 1199, condition: "Like New" },
  { id: 4, name: "AMD RX 7900 XT", brand: "AMD", vram: "20GB", price: 849, condition: "New" },
  { id: 5, name: "NVIDIA RTX 4070 Ti", brand: "NVIDIA", vram: "12GB", price: 799, condition: "Used" },
  { id: 6, name: "AMD RX 7800 XT", brand: "AMD", vram: "16GB", price: 499, condition: "New" },
  { id: 7, name: "NVIDIA RTX 4060 Ti", brand: "NVIDIA", vram: "8GB", price: 399, condition: "Refurbished" },
  { id: 8, name: "Intel Arc A770", brand: "Intel", vram: "16GB", price: 329, condition: "New" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GPU Marketplace
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect graphics card for your build. Compare prices, specs, and conditions.
          </p>
          <div className="flex gap-2 max-w-2xl mx-auto">
            <Input 
              placeholder="Search GPUs..." 
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <FilterSidebar />
          </aside>

          {/* GPU Grid */}
          <main className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-foreground">Available GPUs</h2>
              <p className="text-muted-foreground">{SAMPLE_GPUS.length} listings</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {SAMPLE_GPUS.map((gpu) => (
                <GPUCard key={gpu.id} {...gpu} />
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Index;
