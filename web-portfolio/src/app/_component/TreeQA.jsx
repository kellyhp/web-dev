import React from 'react';
import { TreeView, TreeItem } from '@mui/x-tree-view';
import { styled } from '@mui/system'; // Import styled from '@mui/system'
import { Close, Minus, Plus, SquareO } from './TreeIcon.js';

// Create styles using the styled function
const Root = styled('div')({
 
});

const StyledTreeView = styled(TreeView)({
  hover: 'none',
  backgroundColor: '#FFFBF3"', // Custom background color for TreeView
  fontFamily: 'Montserrat, sans-serif', // Custom font family for TreeView
});

const StyledTreeItem = styled(TreeItem)({
  fontSize: '18px', // Custom font size for TreeItem
  '& .MuiTreeItem-content': {
    padding: '16px', // Custom padding for TreeItem content
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default function TreeQA() {
  const handleToggle = (event, nodeId) => {
    
  };

  return (
    <Root>
      <StyledTreeView
        defaultCollapseIcon={<Minus />}
        defaultExpandIcon={<Plus />}
        defaultEndIcon={<Close />}
        onNodeToggle={handleToggle}
      >
        <StyledTreeItem nodeId="1" label="My Skills" defaultExpanded>
          <StyledTreeItem nodeId="2" label="Frameworks" >
            <StyledTreeItem nodeId="3" label="Flask" />
            <StyledTreeItem nodeId="3" label="ReactJS" />
            <StyledTreeItem nodeId="3" label="D3.js" />
            <StyledTreeItem nodeId="3" label="React Native" />
            <StyledTreeItem nodeId="3" label="Express/Node.js" />
            <StyledTreeItem nodeId="3" label="NextJS and TailwindCSS" />
            <StyledTreeItem nodeId="3" label="Figma/Sketch" />
            <StyledTreeItem nodeId="3" label="Microsoft Azure" />
            <StyledTreeItem nodeId="3" label="Firebase" />
          </StyledTreeItem>
          <StyledTreeItem nodeId="4" label="Programming Languages">
            <StyledTreeItem nodeId="5" label="RStudio" />
            <StyledTreeItem nodeId="5" label="Python" />
            <StyledTreeItem nodeId="5" label="Javascript" />
            <StyledTreeItem nodeId="5" label="Java" />
            <StyledTreeItem nodeId="5" label="MongoDB" />
            <StyledTreeItem nodeId="5" label="SQL" />
            <StyledTreeItem nodeId="5" label="HTML/CSS" />
          </StyledTreeItem>
          <StyledTreeItem nodeId="6" label="Soft Skills" >
            <StyledTreeItem nodeId="7" label="Communication"/>
            <StyledTreeItem nodeId="8" label="Leadership"/>
            <StyledTreeItem nodeId="9" label="Organization"/>
            <StyledTreeItem nodeId="10" label="Problem Solving"/>
          </StyledTreeItem>
          <StyledTreeItem nodeId="7" label={<span>🙀 Delivering Quality Keyboard ASMR videos</span>} />
        </StyledTreeItem>
      </StyledTreeView>
    </Root>
  );
}