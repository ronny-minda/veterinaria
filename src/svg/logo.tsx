import * as React from "react"
const Logo = (props: any) => (
<svg viewBox="0 0 188 188"  xmlns="http://www.w3.org/2000/svg" {...props} className="h-[60px] w-[60px] svg1">
  <path fillRule="evenodd" clipRule="evenodd" d="M94 188C145.915 188 188 145.915 188 94C188 42.0852 145.915 0 94 0C42.0852 0 0 42.0852 0 94C0 145.915 42.0852 188 94 188ZM152.323 145.129C156.88 140.897 154.222 134.142 152.323 131.294C165.344 140.653 153.137 153.675 143.37 154.081C135.557 154.407 133.333 152.861 133.197 152.047C134.011 136.177 129.535 127.631 123.838 119.086C119.28 112.249 108.375 111.354 103.492 111.761C101.864 111.625 98.4457 109.32 97.7946 101.181C97.1435 93.0425 86.9432 85.3109 81.9245 82.4624C78.8047 80.8347 73.2976 78.5559 76.2275 82.4624C79.1574 86.3689 78.5334 87.3456 77.8552 87.3456C73.379 88.5663 70.5305 91.8217 70.1236 94.2633V94.2634C69.925 95.4546 69.8234 96.0647 69.5822 96.6134C69.3291 97.1893 68.9224 97.6976 68.089 98.7395C66.4613 100.774 66.8682 102.809 67.2751 103.216C67.4786 103.419 67.7837 104.029 68.1398 104.742L68.1398 104.742C68.4959 105.454 68.9028 106.268 69.3097 106.878C69.9608 107.855 70.6662 107.828 70.9374 107.692C75.495 107.041 76.9057 109.048 77.0413 110.133C77.0413 113.389 75.6849 118.001 75.0067 119.9C73.379 126.41 76.7701 131.022 78.669 132.514C85.2297 138.303 85.2024 142.628 85.1821 145.836C85.1814 145.934 85.1808 146.03 85.1804 146.126C85.1801 146.201 85.1799 146.276 85.1799 146.35C85.1799 148.954 84.6373 149.063 84.366 148.791C83.2809 148.385 81.192 148.14 81.5175 150.419C81.8431 152.698 81.3819 153.268 81.1106 153.268H65.6474C62.7989 153.268 62.392 151.64 62.392 148.385C62.392 145.78 65.3761 145.4 66.8682 145.536C68.1703 145.862 68.4959 144.858 68.4959 144.315C69.798 136.177 63.6128 121.12 60.3574 114.61C55.7998 106.797 56.2881 95.0772 57.1019 90.194C57.9158 85.7178 57.9158 73.1031 55.4742 68.6269C53.521 65.046 48.9634 66.0497 46.9288 66.9992C42.3712 67.9759 37.7051 67.6774 35.9418 67.4062C32.6864 67.7317 30.2448 60.7597 29.431 57.233C28.1288 55.2798 36.7556 50.4509 41.2318 48.2806C43.8362 46.9785 43.9447 45.0252 43.6734 44.2114C43.6734 42.9092 43.9447 42.3124 44.0803 42.1767C46.0336 39.2468 50.8624 37.158 53.0327 36.4797C65.4033 32.5732 70.9375 37.2936 72.1582 40.1421C83.2266 63.581 98.2015 75.6803 104.305 78.8001C145.24 101.198 141.097 132.393 140.22 138.993C140.173 139.348 140.136 139.632 140.115 139.839C139.789 143.094 140.793 144.722 141.336 145.129C145.242 148.384 150.288 146.486 152.323 145.129ZM95.353 153.268H88.0284C87.7028 153.268 88.0284 152.486 88.6143 151.08C89.4933 148.97 90.9582 145.455 91.6907 141.06C94.0143 127.118 104.305 126.41 108.375 127.631C105.526 127.767 99.0967 129.666 96.1669 136.177C93.237 142.688 96.0312 146.486 97.7946 147.571C98.3372 147.978 99.0967 148.791 97.7946 148.791C96.1669 148.791 95.353 150.826 95.7599 152.047C96.0855 153.023 95.6243 153.268 95.353 153.268ZM57.9396 40.1118C58.4851 40.1979 58.8575 40.71 58.7714 41.2555C58.5636 42.5714 58.1508 44.7374 57.5834 46.9899C57.0199 49.2269 56.2868 51.6193 55.4226 53.3476C54.7545 54.6838 54.9169 55.701 55.312 56.4543C55.7203 57.2326 56.4195 57.7982 56.9485 58.0782C58.7903 58.6618 63.0793 58.8626 65.9435 55.1392C68.9088 51.2842 67.8679 47.7055 67.1132 46.5195C66.8167 46.0536 66.954 45.4355 67.42 45.139C67.8859 44.8425 68.504 44.9798 68.8005 45.4458C69.9448 47.244 71.0741 51.7495 67.5287 56.3586C63.9186 61.0517 58.5146 60.709 56.2466 59.953L56.1792 59.9305L56.1156 59.8987C55.2943 59.4881 54.2017 58.643 53.5409 57.3834C52.851 56.0681 52.6742 54.3724 53.6338 52.4532C54.3973 50.9261 55.0885 48.7067 55.644 46.5014C56.1956 44.3116 56.5967 42.2049 56.7959 40.9436C56.882 40.3981 57.3941 40.0256 57.9396 40.1118Z" />
</svg>
)
export default Logo




