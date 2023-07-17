import React from 'react'

const VPagination = () => {
  return (
    <div>
    <div class="flex flex-col items-center">
    <span class="text-sm text-gray-700 dark:text-gray-400">
        Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span class="font-semibold text-gray-900 dark:text-white">10</span> of <span class="font-semibold text-gray-900 dark:text-white">100</span> Entries
    </span>
    <div class="inline-flex gap-1 mt-2 xs:mt-0">
        <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Prev
        </button>
        <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-lg hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
        </button>
    </div>
  </div>
    </div>
  )
}

export default VPagination
