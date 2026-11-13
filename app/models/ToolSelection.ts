import { ref } from "vue";
import type { Tool } from "../types/Tool";

/** Owns the selected tool and the tab navigation rules; DOM focus stays in the SFC. */
export class ToolSelection {
  private readonly selectedIndex = ref(0);
  constructor(private readonly tools: readonly Tool[]) {
    if (tools.length === 0) throw new Error("At least one tool is required.");
  }
  get activeIndex(): number {
    return this.selectedIndex.value;
  }
  get currentTool(): Tool {
    return this.tools[this.activeIndex]!;
  }
  select = (index: number): void => {
    if (!Number.isInteger(index) || index < 0 || index >= this.tools.length)
      return;
    this.selectedIndex.value = index;
  };
  indexForKey = (key: string, index = this.activeIndex): number | null => {
    if (key === "ArrowRight") return (index + 1) % this.tools.length;
    if (key === "ArrowLeft")
      return (index + this.tools.length - 1) % this.tools.length;
    if (key === "Home") return 0;
    if (key === "End") return this.tools.length - 1;
    return null;
  };
}
