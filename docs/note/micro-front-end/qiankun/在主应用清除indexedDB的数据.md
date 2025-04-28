# 在主应用清除indexedDB的数据

```ts
/**
 * 清除indexedDB数据
 */
export function clearDbData(name: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name);
    request.onsuccess = function (event: any) {
      const db = event.target.result;
      const storeNames = db.objectStoreNames;
      if (storeNames.length === 0) {
        resolve();
        return;
      }
      const transaction = db.transaction(storeNames, "readwrite");
      transaction.oncomplete = function () {
        resolve();
      };
      transaction.onerror = function (e: any) {
        reject(e.target.error);
      };

      for (const storeName of storeNames) {
        const store = transaction.objectStore(storeName);
        store.clear();
      }
    };

    request.onerror = (event: any) => {
      reject(event.target.error);
    };
  });
}
```

```ts
/**
 * 清除主/子应indexedDBe数据
 */
export async function clearMicroAppDbData() {
  for (const key of ["baseApp", "app1", "app2"]) {
    await clearDbData(key);
  }
}
```
