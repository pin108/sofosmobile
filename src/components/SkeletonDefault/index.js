import {View, StyleSheet} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonDefault = ({stylesSkeleton}) => {
  return (
    <SkeletonPlaceholder>
      <View style={stylesSkeleton} />
    </SkeletonPlaceholder>
  );
};

export default SkeletonDefault;

const styles = StyleSheet.create({
});
