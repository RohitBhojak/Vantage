import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Bill.module.css";

export default function BillSkeleton() {
  return (
    <SkeletonTheme baseColor="var(--accent-light)" highlightColor="var(--bg-light)">
      <div className={styles.container}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.detail}>
            <Skeleton width="80px" height={16} />
            <Skeleton width="80px" height={16} />
          </div>
        ))}

        <hr />

        <div className={styles.total}>
          <Skeleton width="90px" height={17} />
          <Skeleton width="90px" height={17} />
        </div>

        <div>
          <Skeleton height={40} borderRadius="var(--border-radius)" width="100%" />
        </div>
      </div>
    </SkeletonTheme>
  );
}
