
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Keyboard, CheckCircle, Award, ScreenShareOff } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const AppDemo = () => {
  const [activeTab, setActiveTab] = useState("coding");
  
  return (
    <div className="relative w-full max-w-6xl mx-auto bg-invis-bg-light rounded-xl overflow-hidden border border-gray-800 shadow-2xl animate-fade-in">
      {/* Top bar */}
      <div className="bg-gray-900 px-4 py-3 flex items-center border-b border-gray-800">
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
      
      {/* Question tabs */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-2">
        <Tabs defaultValue="coding" className="w-full" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto bg-gray-800">
            <TabsTrigger value="coding" className="data-[state=active]:bg-invis data-[state=active]:text-invis-bg">Coding Question</TabsTrigger>
            <TabsTrigger value="multiple-choice" className="data-[state=active]:bg-invis data-[state=active]:text-invis-bg">Multiple Choice</TabsTrigger>
            <TabsTrigger value="essay" className="data-[state=active]:bg-invis data-[state=active]:text-invis-bg">Essay Question</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Content area - split into left explanation and right code */}
      <div className="flex flex-col md:flex-row">
        {/* Left side - Explanation */}
        <div className="p-6 md:w-1/2 border-r border-gray-800">
          {activeTab === "coding" && (
            <>
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
            </>
          )}

          {activeTab === "multiple-choice" && (
            <>
              <h3 className="text-xl font-medium mb-4">Question Analysis</h3>
              <p className="text-gray-300 mb-4">This is a question about database normalization forms. Let me analyze each option:</p>
              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                <li>Option A discusses functional dependencies, which is related to 2NF and 3NF.</li>
                <li>Option B mentions removing transitive dependencies, which is specifically about converting a relation from 2NF to 3NF.</li>
                <li>Option C talks about multi-valued dependencies, which relates to 4NF, not 3NF.</li>
                <li>Option D describes removing partial dependencies, which is about converting from 1NF to 2NF.</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-4">Correct Answer</h3>
              <div className="bg-gray-900 rounded-lg p-4 text-green-400">
                <p className="font-medium">B. Third Normal Form (3NF) is achieved by removing transitive dependencies.</p>
                <p className="mt-2 text-sm text-gray-300">A relation is in 3NF if it is in 2NF and no non-key attribute is transitively dependent on the primary key.</p>
              </div>
            </>
          )}

          {activeTab === "essay" && (
            <>
              <h3 className="text-xl font-medium mb-4">Essay Prompt Analysis</h3>
              <p className="text-gray-300 mb-4">This question asks about the ethical implications of AI in healthcare decision-making. I'll outline key points to address:</p>
              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                <li>Benefits of AI in healthcare diagnosis and treatment planning</li>
                <li>Potential risks including bias in training data</li>
                <li>Questions of accountability when AI is involved in decisions</li>
                <li>Balance of human oversight with AI efficiency</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-4">Essay Structure</h3>
              <div className="bg-gray-900 rounded-lg p-4 text-sm text-gray-300">
                <p className="text-invis font-medium">Introduction:</p>
                <p className="mb-2">Begin by acknowledging the growing role of AI in healthcare and state your thesis on the balance of benefits and ethical concerns.</p>
                
                <p className="text-invis font-medium mt-3">Body Paragraphs:</p>
                <p className="mb-2">1. Benefits: Improved diagnostic accuracy, consistent decision-making...</p>
                <p className="mb-2">2. Risks: Data bias issues, lack of contextual understanding...</p>
                <p className="mb-2">3. Ethical frameworks: Existing models for AI governance in healthcare...</p>
                
                <p className="text-invis font-medium mt-3">Conclusion:</p>
                <p>Emphasize the need for human-AI collaboration with clear oversight protocols.</p>
              </div>
            </>
          )}
        </div>
        
        {/* Right side */}
        <div className="p-6 md:w-1/2 bg-invis-bg">
          {activeTab === "coding" && (
            <>
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
            </>
          )}

          {activeTab === "multiple-choice" && (
            <>
              <div className="bg-gray-900 rounded-lg p-5 mb-6">
                <h4 className="text-xl font-medium mb-3">Which statement correctly describes Third Normal Form (3NF)?</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start p-3 rounded border border-gray-700 bg-gray-800/50">
                    <div className="h-5 w-5 mt-0.5 rounded-full border border-gray-600 flex-shrink-0"></div>
                    <p className="ml-3 text-gray-300">A. A relation is in 3NF if it satisfies all functional dependencies.</p>
                  </div>
                  
                  <div className="flex items-start p-3 rounded border border-invis bg-invis/10">
                    <div className="h-5 w-5 mt-0.5 rounded-full bg-invis flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-invis-bg" />
                    </div>
                    <p className="ml-3 text-white font-medium">B. Third Normal Form (3NF) is achieved by removing transitive dependencies.</p>
                  </div>
                  
                  <div className="flex items-start p-3 rounded border border-gray-700 bg-gray-800/50">
                    <div className="h-5 w-5 mt-0.5 rounded-full border border-gray-600 flex-shrink-0"></div>
                    <p className="ml-3 text-gray-300">C. 3NF requires the elimination of multi-valued dependencies in a relation.</p>
                  </div>
                  
                  <div className="flex items-start p-3 rounded border border-gray-700 bg-gray-800/50">
                    <div className="h-5 w-5 mt-0.5 rounded-full border border-gray-600 flex-shrink-0"></div>
                    <p className="ml-3 text-gray-300">D. A relation is in 3NF when all partial dependencies on the primary key are removed.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/70 rounded-lg p-4 text-gray-300">
                <h4 className="text-invis font-medium mb-2">Explanation</h4>
                <p className="text-sm">
                  Option B is correct. 3NF builds upon 2NF by eliminating transitive dependencies, where non-key attributes 
                  depend on other non-key attributes. In database normalization, we progress from 1NF (atomic values) to 2NF 
                  (no partial dependencies) to 3NF (no transitive dependencies).
                </p>
              </div>
            </>
          )}

          {activeTab === "essay" && (
            <div className="bg-gray-900 rounded-lg p-5 h-[calc(100%-2rem)] overflow-y-auto">
              <h4 className="text-xl font-medium mb-4 text-invis">Essay Response</h4>
              
              <div className="prose prose-invert max-w-none">
                <p className="mb-4">
                  The integration of artificial intelligence into healthcare decision-making represents both a significant advancement and a complex ethical challenge. While AI systems have demonstrated remarkable capabilities in diagnostics, treatment planning, and resource allocation, their implementation raises fundamental questions about accountability, bias, and the appropriate balance between algorithmic efficiency and human judgment.
                </p>
                
                <p className="mb-4">
                  AI in healthcare offers numerous benefits, including improved diagnostic accuracy through pattern recognition that may exceed human capabilities, especially in image analysis such as radiological scans. These systems can provide consistent decision-making uninhibited by fatigue, cognitive biases, or variations in training that affect human practitioners. Furthermore, AI can process vast quantities of medical literature and patient data at speeds impossible for human clinicians, potentially identifying treatment options that might otherwise be overlooked.
                </p>
                
                <p className="mb-4">
                  However, these advantages are counterbalanced by significant concerns. AI systems trained on historical medical data may perpetuate or even amplify existing biases in healthcare delivery. For instance, if training data predominantly represents certain demographic groups, the resulting AI may perform poorly when analyzing patients from underrepresented populations. This raises serious questions about healthcare equity when AI is incorporated into clinical workflows.
                </p>
                
                <p className="mb-4">
                  The question of accountability presents another ethical dimension. When an AI system contributes to or makes a medical decision that results in harm, determining responsibility becomes complicated. Is the developer, the healthcare institution, the supervising physician, or some combination responsible? Traditional medical ethics frameworks centered on human decision-makers must be adapted to address these novel scenarios.
                </p>
                
                <p className="mb-4">
                  A balanced approach to AI in healthcare requires establishing clear ethical frameworks that maintain human oversight while leveraging AI capabilities. The concept of "augmented intelligence" rather than "artificial intelligence" may better capture the ideal relationship—where AI serves as a tool that enhances rather than replaces human clinical judgment.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppDemo;
