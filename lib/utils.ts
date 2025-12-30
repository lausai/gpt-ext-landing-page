import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function safeRound(v: number, n: number) {
  if (v % 1 !== 0) {
    v = parseFloat(v.toPrecision(15))
  }
  let t = Math.pow(10, n)
  let nv = v * t
  if (nv % 1 !== 0) {
    nv = parseFloat(nv.toPrecision(15))
  }
  return Math.round(nv) / t
}
