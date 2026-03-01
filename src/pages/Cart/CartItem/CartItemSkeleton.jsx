import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./CartItem.module.css";
import { QuantityInputSkeleton } from "../../../components/QuantityInput/QuantityInputSkeleton";

export default function CartItemSkeleton() {
  return (
    <SkeletonTheme baseColor="var(--accent-light)" highlightColor="var(--bg-light)">
      <div className={styles.container}>
        <div className={styles.imageContainer} style={{ padding: 0 }}>
          <Skeleton containerClassName="flex h-full w-full" borderRadius="var(--border-radius)" />
        </div>
        <div className={styles.infoContainer}>
          <Skeleton width="80%" count={2} height={20} rows={2} />
          <Skeleton width="50%" height={18} />
        </div>
        <div className={styles.buttonContainer}>
          <QuantityInputSkeleton />
        </div>
      </div>
    </SkeletonTheme>
  );
}
