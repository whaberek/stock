import React, { memo } from 'react';
import { Autocomplete } from 'components/Autocomplete';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { useFetchCompanies } from './hooks/useFetchCompanies';
import { useSelect } from './hooks/useSelect';
import { CompanyTable } from './components/CompanyTable';
import { StyledBox, StyledStack } from './Companies.styles';

export const Companies = memo(() => {
  const {options, isLoading} = useFetchCompanies();
  const {selected, onChange} = useSelect();

  return (
    <>
      <StyledBox>
        <Autocomplete
          label="Select company"
          loading={isLoading}
          onChange={onChange}
          options={options}
          sx={{width: 300}}
          renderInput={(params) => <TextField {...params} label="Select company"/>}
        />
        <Typography marginLeft={2}>Please use "Exxon Mobil Corporation" as example</Typography>
      </StyledBox>
      {!selected && (
        <StyledStack spacing={2}>
          <Alert severity="info">There is no company to show, please select data from input to render table.</Alert>
        </StyledStack>
      ) }
      {selected && <CompanyTable selected={selected}/> }
    </>
  );
});
