import type { MiniAppNotificationDetails } from "@farcaster/frame-sdk";
import { redis } from "./redis";

function getUserNotificationDetailsKey(fid: number, notificationServiceKey: string = "minikit"): string {
  return `${notificationServiceKey}:user:${fid}`;
}

export async function getUserNotificationDetails(
  fid: number,
  notificationServiceKey?: string,
): Promise<MiniAppNotificationDetails | null> {
  if (!redis) {
    return null;
  }

  return await redis.get<MiniAppNotificationDetails>(
    getUserNotificationDetailsKey(fid, notificationServiceKey),
  );
}

export async function setUserNotificationDetails(
  fid: number,
  notificationDetails: MiniAppNotificationDetails,
  notificationServiceKey?: string,
): Promise<void> {
  if (!redis) {
    return;
  }

  await redis.set(getUserNotificationDetailsKey(fid, notificationServiceKey), notificationDetails);
}

export async function deleteUserNotificationDetails(
  fid: number,
  notificationServiceKey?: string,
): Promise<void> {
  if (!redis) {
    return;
  }

  await redis.del(getUserNotificationDetailsKey(fid, notificationServiceKey));
}
