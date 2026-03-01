import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./QuantityInput.module.css";

export function QuantityInputSkeleton() {
  return (
    <div className={`${styles.container} flex-col`} style={{ width: "100%" }}>
      <div className={`${styles.controls}`} style={{ padding: 0 }}>
        <Skeleton
          containerClassName="flex h-full w-full"
          height={40}
          borderRadius="var(--border-radius)"
        />
      </div>

      <Skeleton
        containerClassName="flex h-full w-full"
        height={40}
        borderRadius="var(--border-radius)"
      />
    </div>
  );
}
