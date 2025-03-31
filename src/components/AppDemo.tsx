
import React from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Keyboard, CheckCircle, Award, ScreenShareOff } from 'lucide-react';

const AppDemo = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto bg-invis-bg-light rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
      {/* Top bar */}
      <div className="bg-gray-900 px-4 py-3 flex items-center border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex mx-auto space-x-2 bg-gray-800 rounded-md px-3 py-1.5">
          <Button variant="ghost" size="sm" className="text-xs px-2 h-6 text-gray-300 hover:text-invis">
            Show/Hide <span className="ml-1 shortcut-key">Alt+C</span>
          </Button>
          <div className="w-px bg-gray-700"></div>
          <Button variant="ghost" size="sm" className="text-xs px-2 h-6 text-gray-300 hover:text-invis">
            Screenshot <span className="ml-1 shortcut-key">Alt+V</span>
          </Button>
          <div className="w-px bg-gray-700"></div>
          <Button variant="ghost" size="sm" className="text-xs px-2 h-6 text-gray-300 hover:text-invis">
            Solve <span className="ml-1 shortcut-key">Alt+B</span>
          </Button>
          <div className="w-px bg-gray-700"></div>
          <Button variant="ghost" size="sm" className="text-xs px-2 h-6 text-gray-300 hover:text-invis">
            Start Over <span className="ml-1 shortcut-key">Alt+R</span>
          </Button>
        </div>
      </div>
      
      {/* Content area - split into left explanation and right code */}
      <div className="flex flex-col md:flex-row">
        {/* Left side - Explanation */}
        <div className="p-6 md:w-1/2 border-r border-gray-800">
          <h3 className="text-xl font-medium mb-4">My Thoughts</h3>
          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li>I start by sorting the intervals based on their starting values so that any overlapping intervals lie next to each other.</li>
            <li>Then I iterate through the sorted list, merging intervals that overlap by checking if the current interval's start is within the last merged interval.</li>
            <li>Finally, I append non-overlapping intervals and return the merged result.</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-4">Solution</h3>
          <div className="bg-gray-900 rounded-lg p-4 text-sm text-green-400 font-mono overflow-x-auto">
            <pre className="whitespace-pre">
{`def merge_intervals(intervals):
    # If the input list is empty, return an empty list
    if not intervals:
        return []  # Return empty list if no intervals provided
        
    # Sort the intervals based on the starting time of each interval
    intervals.sort(key=lambda x: x[0])  # Sorting intervals in-place based`}
            </pre>
          </div>
        </div>
        
        {/* Right side - Code with line numbers */}
        <div className="p-6 md:w-1/2 bg-invis-bg">
          <div className="bg-gray-900 rounded-lg overflow-hidden font-mono text-sm">
            <table className="w-full">
              <tbody>
                {[...Array(15)].map((_, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-900/80"}>
                    <td className="py-1 px-2 text-gray-500 text-right select-none w-10 border-r border-gray-800">{i+1}</td>
                    <td className="py-1 px-3 text-gray-300 overflow-x-auto">
                      {i === 0 && <span><span className="text-purple-400">def</span> <span className="text-yellow-300">merge_intervals</span>(intervals):</span>}
                      {i === 1 && <span>    <span className="text-gray-500"># If the input list is empty, return an empty list</span></span>}
                      {i === 2 && <span>    <span className="text-purple-400">if</span> <span className="text-red-400">not</span> intervals:  <span className="text-gray-500"># Check if intervals list is empty</span></span>}
                      {i === 3 && <span>        <span className="text-purple-400">return</span> []  <span className="text-gray-500"># Return empty list if no intervals provided</span></span>}
                      {i === 5 && <span>    <span className="text-gray-500"># Sort the intervals based on the starting time of each interval</span></span>}
                      {i === 6 && <span>    intervals.<span className="text-yellow-300">sort</span>(key=<span className="text-purple-400">lambda</span> x: x[0])  <span className="text-gray-500"># Sorting intervals in-place based</span></span>}
                      {i === 8 && <span>    <span className="text-gray-500"># Initialize the merged intervals list with the first interval</span></span>}
                      {i === 9 && <span>    merged = [intervals[0]]  <span className="text-gray-500"># Start with first interval as initial merged</span></span>}
                      {i === 11 && <span>    <span className="text-gray-500"># Iterate over the sorted intervals starting from the second interval</span></span>}
                      {i === 12 && <span>    <span className="text-purple-400">for</span> current <span className="text-purple-400">in</span> intervals[1:]:  <span className="text-gray-500"># Loop through remaining intervals</span></span>}
                      {i === 13 && <span>        <span className="text-gray-500"># Get the last interval in the merged list</span></span>}
                      {i === 14 && <span>        last = merged[-1]  <span className="text-gray-500"># The last interval in the merged result</span></span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Code explanation section */}
          <div className="mt-6 bg-gray-900/70 rounded-lg p-4 text-gray-300">
            <h4 className="text-invis font-medium mb-2">Code Explanation</h4>
            <p className="text-sm">
              The function first checks if the input list is empty. If so, it returns an empty list. 
              Then it sorts the intervals by their start time to ensure overlapping intervals are adjacent.
              The algorithm initializes the result with the first interval and iterates through the 
              remaining intervals, merging when necessary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDemo;
