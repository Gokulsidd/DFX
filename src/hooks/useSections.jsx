import { useState, useEffect } from "react";

export default function useSections(selectedDoc) {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedDoc) {
      setLoading(true);
      // TODO: Replace with actual database fetch
      const mockSections = [
        {
          id: 1,
          title: "Metadata",
          content: `Metadata refers to data that provides information about other data. 
          In the context of documents, metadata includes details like:
          
          - **Title**: "Research Paper on AI"
          - **Author**: John Doe
          - **Date Created**: 2025-02-18
          - **File Size**: 2.3MB
          - **Keywords**: AI, Machine Learning, Deep Learning
      
          This metadata helps in organizing and searching documents efficiently.`,
        },
        {
          id: 2,
          title: "Annotations",
          content: `Annotations are additional notes, highlights, or comments added to a document. 
          They can be used for collaborative reviews or for making personal notes. 
          Common types of annotations include:
      
          - **Text Highlights**: Important sections of the document are highlighted.
          - **Comments**: Users can add comments on specific paragraphs.
          - **Stamps & Signatures**: Used for approvals or verification.
          
          Annotations improve document interactivity and usability.`,
        },
        {
          id: 3,
          title: "Revision History",
          content: `Revision history tracks all changes made to a document over time. 
          This is useful for tracking edits, ensuring compliance, and restoring previous versions.
          
          Example revisions:
          - **Version 1.0** - Created on 2025-01-10 by Alice
          - **Version 1.1** - Edited on 2025-01-15 by Bob (Added more details)
          - **Version 1.2** - Reviewed on 2025-01-20 by Charlie (Approved changes)
      
          Revision history ensures document integrity and accountability.`,
        },
        {
          id: 4,
          title: "Document Summary",
          content: `This document provides an overview of AI advancements in 2025.
          
          - **Chapter 1**: Introduction to AI Evolution
          - **Chapter 2**: Deep Learning Breakthroughs
          - **Chapter 3**: Ethical Considerations in AI
          - **Chapter 4**: Future Predictions
      
          The goal is to educate readers about the rapid growth of AI technologies 
          and their implications in different industries.This document provides an overview of AI advancements in 2025.
          
          - **Chapter 1**: Introduction to AI Evolution
          - **Chapter 2**: Deep Learning Breakthroughs
          - **Chapter 3**: Ethical Considerations in AI
          - **Chapter 4**: Future Predictions
      
          The goal is to educate readers about the rapid growth of AI technologies 
          and their implications in different industries.This document provides an overview of AI advancements in 2025.
          
          - **Chapter 1**: Introduction to AI Evolution
          - **Chapter 2**: Deep Learning Breakthroughs
          - **Chapter 3**: Ethical Considerations in AI
          - **Chapter 4**: Future Predictions
      
          The goal is to educate readers about the rapid growth of AI technologies 
          and their implications in different industries.`,
        },
        {
          id: 5,
          title: "Document Summary",
          content: `This document provides an overview of AI advancements in 2025.
          
          - **Chapter 1**: Introduction to AI Evolution
          - **Chapter 2**: Deep Learning Breakthroughs
          - **Chapter 3**: Ethical Considerations in AI
          - **Chapter 4**: Future Predictions
      
          The goal is to educate readers about the rapid growth of AI technologies 
          and their implications in different industries.This document provides an overview of AI advancements in 2025.
          
          - **Chapter 1**: Introduction to AI Evolution
          - **Chapter 2**: Deep Learning Breakthroughs
          - **Chapter 3**: Ethical Considerations in AI
          - **Chapter 4**: Future Predictions
      
          The goal is to educate readers about the rapid growth of AI technologies 
          and their implications in different industries.This document provides an overview of AI advancements in 2025.
          
          - **Chapter 1**: Introduction to AI Evolution
          - **Chapter 2**: Deep Learning Breakthroughs
          - **Chapter 3**: Ethical Considerations in AI
          - **Chapter 4**: Future Predictions
      
          The goal is to educate readers about the rapid growth of AI technologies 
          and their implications in different industries.`,
        },
        
      ];

      setTimeout(() => {
        setSections(mockSections);
        setLoading(false);
      }, 500);
    }
  }, [selectedDoc]);

  return { sections, loading };
}
