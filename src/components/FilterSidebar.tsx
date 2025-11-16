import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export const FilterSidebar = () => {
  return (
    <Card className="p-6 space-y-6 border-border bg-card sticky top-4">
      <div>
        <h3 className="font-semibold mb-4 text-foreground">Filters</h3>
      </div>
      
      <div className="space-y-3">
        <Label className="text-foreground">Brand</Label>
        <div className="space-y-2">
          {["NVIDIA", "AMD", "Intel"].map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <label htmlFor={brand} className="text-sm text-muted-foreground cursor-pointer">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-foreground">VRAM</Label>
        <div className="space-y-2">
          {["8GB", "12GB", "16GB", "24GB+"].map((vram) => (
            <div key={vram} className="flex items-center space-x-2">
              <Checkbox id={vram} />
              <label htmlFor={vram} className="text-sm text-muted-foreground cursor-pointer">
                {vram}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-foreground">Condition</Label>
        <div className="space-y-2">
          {["New", "Like New", "Used", "Refurbished"].map((condition) => (
            <div key={condition} className="flex items-center space-x-2">
              <Checkbox id={condition} />
              <label htmlFor={condition} className="text-sm text-muted-foreground cursor-pointer">
                {condition}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-foreground">Price Range</Label>
        <Slider defaultValue={[0, 5000]} max={5000} step={100} className="mt-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>$0</span>
          <span>$5,000+</span>
        </div>
      </div>
    </Card>
  );
};
