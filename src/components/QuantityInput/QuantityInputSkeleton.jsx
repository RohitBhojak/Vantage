import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./QuantityInput.module.css";

export function QuantityInputSkeleton() {
  return (
    <div className={`${styles.container} flex-col`}>
      <div className={`${styles.controls}`} style={{ padding: 0 }}>
        <Skeleton
          containerClassName="flex h-full w-full"
          height={35}
          borderRadius="var(--border-radius)"
        />
      </div>

      <Skeleton width="100px" height={35} borderRadius="var(--border-radius)" />
    </div>
  );
}
